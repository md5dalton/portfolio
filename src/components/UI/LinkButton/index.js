import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'

export default ({ to, children, ...rest }) => <Link to="/contact"><Button {...rest}>{children}</Button></Link>