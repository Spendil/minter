<template>
	<div class="user">
		<div class="user__find">
			<b-input-group prepend="Address" class="mt-3">
				<b-form-input v-model="address"></b-form-input>
				<b-input-group-append>
					<b-button variant="outline-success" @click="getDelegations">GO</b-button>
				</b-input-group-append>
			</b-input-group>
		</div>
		<delegations :delegations="delegations" />
	</div>
</template>
<script>
import { getDelegationsList } from '../api/api'
import Delegations from './Delegations'
export default {
	name: 'UserFinder',
	components: {
		Delegations
	},
	data () {
		return {
			delegations: null,
			address: '',
			coin: ''
		}
	},
	methods: {
		async getDelegations() {
			console.log()
			const { data } = await getDelegationsList(this.address.trim())
			this.delegations = data.data
			for (let i = 0; i < this.delegations.length - 1; i++) {
				for (let j = i + 1; j < this.delegations.length; j++) {
					if (this.delegations[i].validator_meta.name === this.delegations[j].validator_meta.name) {
						this.delegations[i].coin += `, ${this.delegations[j].coin}`
						this.delegations[i].value += `, ${this.delegations[j].value}`
						this.delegations[i].bip_value += `, ${this.delegations[j].bip_value}`
						this.delegations.splice(j, 1)
						j--
					}
				}
			}
		}
	}
}
</script>
<style lang="scss">
.user {
	display: flex;
	flex-direction: column;
	&__find {
		width: 600px;
		margin: 0 auto;
	}
}
form {
	display: flex;
}
</style>