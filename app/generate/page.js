"use client"
import React, { Suspense } from 'react'
import Generate from '../component/Generate'

const Generatepage = () => {


    return (<>
        <Suspense fallback={<div>Loading...</div>}>
            <Generate />
        </Suspense>
    </>
    )
}

export default Generatepage
