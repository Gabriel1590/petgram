import { useContext } from 'react'
import { Context } from '../Context'

export const useStateValue = () => useContext(Context)
