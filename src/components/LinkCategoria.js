import React from 'react'

const LinkCategoria = ({categoria}) =>{
    return(
        <a to={`/anuncios/${categoria.url}/`} className="btn btn-secondary h-100 m-2 col-sm">
            <i className={`fa ${categoria.icon} fa-4x`} aria-hidden="true"></i><br />
            {categoria.name}
        </a>
    )
}
export default LinkCategoria