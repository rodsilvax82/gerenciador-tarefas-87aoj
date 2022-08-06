import React, { useState } from "react";

export const Filter = () => {

    const [ShowFilters , setShowFilters] = useState(false);
    
    return (
        <div className="container-filtros">
            <div className="title">
                <span>Tarefas</span>
                <img src="/filter.svg" alt="Filtrar Tarefas" onClick={e => setShowFilters(!ShowFilters)}/>
                    <div className="form">
                        <div>
                            <label>Data prevista de conclusão:</label>
                            <input type='date'></input>
                        </div>
                        <div>
                            <label>Até:</label>
                            <input type='date'></input>
                        </div>
                        <div className="line"/>
                        <div>
                            <label>Status:</label>
                            <select>
                                <option>Todas</option>
                                <option>Ativas</option>
                                <option>Concluídas</option>
                            </select>
                        </div>
                    </div>
            </div>
            {ShowFilters && <div className="filtrosMobile">
            <div>
                            <label>Data prevista de conclusão:</label>
                            <input type='date'></input>
                        </div>
                        <div>
                            <label>Até:</label>
                            <input type='date'></input>
                        </div>
                        <div className="line"/>
                        <div>
                            <label>Status:</label>
                            <select>
                                <option>Todas</option>
                                <option>Ativas</option>
                                <option>Concluídas</option>
                            </select>
                        </div>
            </div>}
        </div>
    )

}
