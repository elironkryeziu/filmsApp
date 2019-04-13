import Api from '@/services/Api'
/* eslint-disable */

export default {
  index () {
    return Api().get('films')
  },
  post (film) {
    return Api().post('films', film)
  }
}