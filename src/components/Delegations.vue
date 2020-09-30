<template>
	<div class="user__delegations">
		<table >
			<thead>
				<tr>
					<th>Validator</th>
					<th>Coins</th>
					<th>Value</th>
					<th>Bip Value</th>
				</tr>
			</thead>
			<tbody v-for="(item, index) in delegations" :key="index">
				<tr>
					<td> {{item.validator_meta.name}} </td>
				</tr>
				<tr v-for="(coin, i) in item.coin.split(', ')" :key="`${coin}${i}`">
					<td></td>
					<td> {{item.coin.split(', ')[i]}} </td>
					<td> {{item.value.split(', ')[i]}} </td>
					<td> {{item.bip_value.split(', ')[i]}} </td>
				</tr>
			</tbody>
		</table>

	</div>
</template>
<script>
export default {
	name: 'Delegations',
	props: {
		delegations: {
			type: Array
		}
	},
	methods: {
		splitStr(str) {
			return str.split(', ')
		}
	}
}
</script>
<style lang="scss">
.user__delegations {
	width: 768px;
	margin: 0 auto;
	text-align: left;
}
.table {
	width: 100%;
	border-collapse: collapse;
}
td, th {
	padding: 10px;
}
td {
	border-top: 1px solid gray;
}

</style>