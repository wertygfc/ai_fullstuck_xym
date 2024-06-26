import axios from 'axios';

export function addAddress(params) {
    return axios.post('/address', params)
}

export function getAddressList() {
    return axios.get('/address')
}

export function getAddressDetail(id) {
    return axios.get('/address/' + id)
}