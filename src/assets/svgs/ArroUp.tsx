import React from 'react'

const ArrowUp = ({ color }: { color: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5.479" viewBox="0 0 10 5.479">
            <path fill={color} id="ArrowUp" d="M4.364,5.2.186,1.024A.673.673,0,0,1,.05.832.532.532,0,0,1,0,.6.606.606,0,0,1,.165.18.56.56,0,0,1,.6,0H9.4a.56.56,0,0,1,.434.181A.611.611,0,0,1,10,.6a1.85,1.85,0,0,1-.186.421L5.636,5.2a.962.962,0,0,1-.3.21.9.9,0,0,1-.677,0A.963.963,0,0,1,4.364,5.2Z" transform="translate(10 5.479) rotate(180)" />
        </svg>


    )
}

export default ArrowUp