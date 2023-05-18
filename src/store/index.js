import axios from 'axios'
import {createStore} from 'vuex'
const netURL = "https://portfolio-jkij.onrender.com/"

export default createStore({
  state: {
    homePage: null,
    details: null,
    work: null,
    education: null,
    projects: null,
    testimonials: null,
    message: null
  },
  getters: {
  },
  mutations: {
    setHomePage(state, value) {
      state.homePage = value
    },
    setDetails(state, value) {
      state.details = value
    },
    setWork(state, value) {
      state.work = value
    },
    setEducation(state, value) {
      state.education = value
    },
    setProjects(state, value) {
      state.projects = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    },
    setMessage(state, value) {
      state.message = value
    }
  },
  actions: {
    async fetchHomePage(context) {
      const res = await axios.get(`${netURL}home`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setHomePage', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async fetchDetails(context) {
      const res = await axios.get(`${netURL}about`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setDetails', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async fetchWork(context) {
      const res = await axios.get(`${netURL}resumeWork`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setWork', err)
      }else {
        context.commit('setMessage', err)
      }
    },
    async fetchEducation(context) {
      const res = await axios.get(`${netURL}resumeEducation`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setEducation', err)
      }else {
        context.commit('setMessage', err)
      }
    },
    async fetchProjects(context) {
      const res = await axios.get(`${netURL}projects`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setProjects', err)
      }else {
        context.commit('setMessage', err)
      }
    },
    async fetchTestimonials(context) {
      const res = await axios.get(`${netURL}testimonials`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setTestimonials', err)
      }else {
        context.commit('setMessage', err)
      }
    }
  },
  modules: {
  }
})
