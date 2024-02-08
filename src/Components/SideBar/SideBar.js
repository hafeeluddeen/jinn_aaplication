
import "./sidebar.css"

const SideBar  =() =>
{
    const menuItems = ['Dashboard', 'Timesheet', 'Leave','Work From Home','Feedback','Survey','Service Desk','Forms','Travel','Expenses'];
    return(
        <div className="flex flex-column justify-content-between sidebar" style={{height:"100vh" , border:"2px solid black",padding:"20px",color:"white"}}>
  {/* items */}
            <div className="flex flex-column">

                <div className="logo flex flex-row justify-content-start">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAiCAYAAACqVHINAAAABHNCSVQICAgIfAhkiAAAAjZJREFUSEu1lj1IHFEUhR2wEIloYSGCsChEJAYTAoqCGDAoBCL+BBLSWRqEVBY2Foq9naWVkDpCGlEECy0UTGxcjPiDxSYkFlkhFsL6HXm7mHVn3nV298Jlduedc7+5b97Mm6CixJHJZBKUHCL7yA4yEZSKQfE6ak2Tk/k1SwIB8JTCK2RtoYsuGgKgh8JLYQBBi4IAeEKNz1GAUkCWKdLpu6+xO6GLYYrP+wBFdQJE0/S4bBAANRRftQBidwLkOeaFckNGAUyUG/IBgNIUsVYX0/WO6kpTxIW8pfqYiRD3iaeTEbx6TkwRt5M3VFeaIi7kNdWVpgho/Z9TnnL8Qi4HQfAtyo1nkPEBE0H3BMOvAuKvnJsBdlaoEJ5XnO9/COQoRPyX8xOAtvPHgbzknNIU6mTPo1RHmsZc4Onlj9IUgmx6lGnGPwE6zOrwdPNbO6IpBNH8++InkPE7EG1UXT5TdlwQ7c/VBsMioA3p8LzgoLREWpAplK0G9RmQWQd5xlFpiZQgej3oQ8wSc4Au8LQj1meQJZKCNKD8aFGjWQJyjKeN30pLrN2+VjC959BkcKwD2UWvvd2yv/9Bv5WFNGLS96svdjDtAGlG2OITM76NPp17QTqj1n9UfMe0jzaBSBkVB2hTEvz3FnY3VFcZFkmMSQPkHN2PbJF7r3q3EMJu6jHmEw8k10EoxC2EKjcdWnl34yQCoqnR+FX+NERuWlxxJYZ68pHLlObZdasLuHT5m/PXYXN8A0QF5eZCS3rAAAAAAElFTkSuQmCC"/>

                </div>
                

                <div className="contents">
                <ul className="listing_items">
                    {
                        menuItems.map(item => <li className="" style={{color:"white"}}>{item}</li>)
                    }
                </ul>
                    

                </div>
               

            </div>

            {/* username and logout */}
            <div>
            <div className="flex flex-row justify-content-between" style={{"padding":"2px"}}>
                        <div className="userName" style={{ fontSize: '0.9rem', margin:"1px" }}>
                               <p style={{"fontWeight":"bold","fontSize":"15px"}}>hafeeluddeen</p>

                        </div>
                        <div className="logoutLogo flex flex-column justify-content-center">
                        <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem' }}></i>
                        </div>
                    </div>


            </div>
        </div>
    )

}

export default SideBar