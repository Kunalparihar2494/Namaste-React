import React,{useContext} from 'react'
import ThemeContext from './ThemeProvider';

function ChildC({data}) {
    console.log('Child C')
    const theme = useContext(ThemeContext);
    console.log('theme-',data)
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', 
        color: theme === 'light' ? '#000' : '#fff', padding: '20px', textAlign: 'center' }}>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ChildC