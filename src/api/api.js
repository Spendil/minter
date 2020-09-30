import axios from 'axios'

axios.defaults.baseURL = 'https://explorer-api.minter.network/api/v1'

export const getDelegationsList = address => {
	return axios.get(`/addresses/${address}/delegations`, {params: {
		limit: 999
	}})
}