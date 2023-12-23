import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {  // == data
    questionList: [],
    itemNum: 1, // 初始
    answerId: []  // 用来存最终答案的
  },
  getters: {  // == computed
    rightAnswer(state) {
      let arr = []
      for(let question of state.questionList){
        for(let answer of question.topic_answer) {
          if(answer.is_standard_answer == 1){
            arr.push(answer.topic_answer_id)
          }
        }
      }
      return arr
    }
  },
  mutations: {  // == methods
    getQuestionList(state, list) {  // 所有写在mutation中的当函数的第一个参数都是state
      state.questionList = list
    },
    nextItem(state) {
      state.itemNum += 1
    },
    saveAnswer(state, id) {
      state.answerId.push(id)
    }
  },
  actions: {  // == methods  async
    getQuestionListAction(context) {
      axios.get('https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/questions')
      .then(res => {
        console.log(res);
        context.commit('getQuestionList', res.data)   // 触发mutation中的方法
      })
    },
    nextItemAction({ commit, state }, id) {
      if(state.itemNum < state.questionList.length) {
        commit('nextItem')
      }
      commit('saveAnswer', id)
    }
  },
  modules: {
  }
})
