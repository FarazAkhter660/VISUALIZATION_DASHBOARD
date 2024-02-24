import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsActivity, BsAirplaneEngines, BsReceipt, BsTrophy, BsCupHot, BsEyeglasses}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Intense',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Likelihd',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        }, 
        {
          name: 'Releve',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Year',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Topics',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Country',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Region',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'City',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3 >VISUALIZATION DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>INTENSITY</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>LIKELIHOOD</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>RELEVANCE</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>YEAR</h3>
                    <BsEyeglasses className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COUNTRY</h3>
                    <BsCupHot className='card_icon'/>
                </div>
                <h1>86</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOPICS</h3>
                    <BsTrophy className='card_icon'/>
                </div>
                <h1>50</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REGION</h3>
                    <BsReceipt className='card_icon'/>
                </div>
                <h1>479</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CITY</h3>
                    <BsAirplaneEngines className='card_icon'/>
                </div>
                <h1>98</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home