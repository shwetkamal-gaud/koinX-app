import GetStarted from '@/Components/GetStarted'
import ProfitCalc from '@/Components/ProfitCalc'
import React from 'react'

const ProfitCalculatorPage = () => {
    return (
        <div className='d-flex flex-column flex-md-row p-3 gap-2 '>
            <div className='card col-12 col-md-9  d-flex shadow border-0 flex-column'>
                <ProfitCalc />
            </div>
            <div className='col-12 col-md-3'>
                <GetStarted />
            </div>
        </div>
    )
}

export default ProfitCalculatorPage