import React from 'react';

import PageHeader from '../../components/pagesHeader';
import TeacherItem from '../../components/teacherItens';


import './style.css';


function teacherList() {
    return ( 
        <div id="page-teacher-list" className="container">
            <PageHeader title="Vem Estudar e Fazer parte do Sucesso">
                <form action="" id="search-teachers">

                    <div className="input-block">
                        <label htmlFor="subject"> Matéria </label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day"> Dia da Semana </label>
                        <input type="text" id="week-day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time"> Hora </label>
                        <input type="text" id="time"/>
                    </div>

                </form>
            </PageHeader>  

            <main>
               <TeacherItem /> 
               <TeacherItem /> 
               <TeacherItem /> 
               <TeacherItem /> 
               <TeacherItem /> 
               <TeacherItem /> 
               <TeacherItem /> 
               <TeacherItem /> 
            </main>          
        </div>
    )
}


export default teacherList;