import { DATA } from '../../data'
import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from '../types'

export const loadPosts = () => ({
  type: LOAD_POSTS,
  payload: DATA
})

export const toggleBooked = id => ({
  type: TOGGLE_BOOKED,
  payload: id
})

export const removePost = id => ({
  type: REMOVE_POST,
  payload: id
})

export const addPost = post => {
  post.id = Date.now().toString()
  return {
    type: ADD_POST,
    payload: post
  }
}
