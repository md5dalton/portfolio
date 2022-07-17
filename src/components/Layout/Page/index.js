import React from 'react'

import "./styles.sass"

export default ({ children, name }) => <div className={`page ${name}`}>{children}</div>