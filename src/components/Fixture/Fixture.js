import React from 'react';
import { grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, grupo7, grupo8 } from "./Datagrupos";
import { EquiposStyle, contenedorStyle, eachStyle, grupoStyle, imgStyle, countryStyle, grupoTitle} from './Styles';


const Fixture = () => {

  return (
    <div className={EquiposStyle}>
        <h2 className='col-span-6 mt-5 ml-5 h-fit text-primary text-center text-5xl font-bold  pt-5 pb-8'>CONOCE A LOS GRUPOS FINALES</h2>
        <div className={contenedorStyle}>
            <h4 className={grupoTitle}>Grupo A</h4>
        {
            grupo1.map(item => 
                <div key={item.id}>
                    <div className={eachStyle}>
                        <p className={grupoStyle}>{item.id}</p>
                        <img className={imgStyle} src={item.img} alt={item.id}/>
                        <h4 className={countryStyle}>{item.country}</h4>
                    </div>
                </div>
                )
        }
        </div>
        <div className={contenedorStyle}>
        <h4 className={grupoTitle}>Grupo B</h4>
        {
            grupo2.map(item => 
                <div key={item.id}>
                    <h2>{item.grupo2}</h2>
                    <div className={eachStyle}>
                        <p className={grupoStyle}>{item.id}</p>
                        <img className={imgStyle} src={item.img} alt={item.id}/>
                        <h4 className={countryStyle}>{item.country}</h4>
                    </div>
                </div>
                )
        }
        </div>
        <div className={contenedorStyle}>
        <h4 className={grupoTitle}>Grupo C</h4>
        {
            grupo3.map(item => 
                <div key={item.id}>
                    <h2>{item.grupo3}</h2>
                    <div className={eachStyle}>
                        <p className={grupoStyle}>{item.id}</p>
                        <img className={imgStyle}src={item.img} alt={item.id}/>
                        <h4 className={countryStyle}>{item.country}</h4>
                    </div>
                </div>
                )
        }
        </div>
        <div className={contenedorStyle}>
        <h4 className={grupoTitle}>Grupo D</h4>
        {
            grupo4.map(item => 
                <div key={item.id}>
                    <h2>{item.grupo4}</h2>
                    <div className={eachStyle}> 
                        <p className={grupoStyle}>{item.id}</p>
                        <img className={imgStyle} src={item.img} alt={item.id} />
                        <h4 className={countryStyle}>{item.country}</h4>
                    </div>
                </div>
                )
        }
        </div>
        <div className={contenedorStyle}>
        <h4 className={grupoTitle}>Grupo E</h4>
        {
            grupo5.map(item => 
                <div key={item.id}>
                    <h2>{item.grupo5}</h2>
                    <div className={eachStyle}>
                        <p className={grupoStyle}>{item.id}</p>
                        <img className={imgStyle} src={item.img} alt={item.id}/>
                        <h4 className={countryStyle}>{item.country}</h4>
                    </div>
                </div>
                )
        }
        </div>
        <div className={contenedorStyle}>
        <h4 className={grupoTitle}>Grupo F</h4>
        {
            grupo6.map(item => 
                <div key={item.id}>
                    <h2>{item.grupo6}</h2>
                    <div className={eachStyle}>
                        <p className={grupoStyle}>{item.id}</p>
                        <img className={imgStyle} src={item.img} alt={item.id} />
                        <h4 className={countryStyle}>{item.country}</h4>
                    </div>
                </div>
                )
        }
        </div>
        <div className={contenedorStyle}>
        <h4 className={grupoTitle}>Grupo G</h4>
        {
            grupo7.map(item => 
                <div key={item.id}>
                    <h2>{item.grupo7}</h2>
                    <div className={eachStyle}>
                        <p className={grupoStyle}>{item.id}</p>
                        <img className={imgStyle} src={item.img} alt={item.id}/>
                        <h4 className={countryStyle}>{item.country}</h4>
                    </div>
                </div>
                )
        }
        </div>
        <div className={contenedorStyle}>
        <h4 className={grupoTitle}>Grupo H</h4>
        {
            grupo8.map(item => 
                <div key={item.id}>
                    <h2>{item.grupo8}</h2>
                    <div className={eachStyle}>
                        <p className={grupoStyle}>{item.id}</p>
                        <img className={imgStyle} src={item.img} alt={item.id} />
                        <h4 className={countryStyle}>{item.country}</h4>
                    </div>
                </div>
                )
        }
        </div>
    </div>
  )
}

export default Fixture