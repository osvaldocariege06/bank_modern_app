import React from 'react'
import styles from '../style'

import { stats } from '../constants/index'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map(stat => (
        <div key={stat.id} className={`flex flex-row m-3 flex-1 justify-center items-center`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats