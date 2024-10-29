import React from 'react'

const Progress = () => {
  return (
    <div>

        <div class="meal">  
            <div class="m-bar">
                <h3>LIVE</h3>
                <div class=" prog">
                <div class=" bar" ></div>
                </div>
            </div>
            <div class="meal-c">
                <div class="m-left">
                    <div class="m-leftc">
                        <div class="m-flex">
                            <input type="checkbox" name="" id="" class="checkbox"/>
                            <div class="m-time">
                                <p> 9:40am </p>
                                <h6>Get ready , your rider has arrived</h6>
                            </div>
                        </div>
                        
                    </div>
                    <div class="abss"></div>
                    <div class="m-leftc m-l">
                        <div class="m-flex">
                            <input type="checkbox" name="" id="" class="checkbox"/>
                            <div class="m-time">
                                <p> 9:07 AM </p>
                                <h6>Our rider is on the way</h6>
                            </div>
                            
                        </div>
                        <div class="rider">
                            <img src="../Asset/image/worker.png" alt=""/>
                            <button>Call the rider</button>
                        </div>
                        
                    </div>

                    <div class="m-leftc">
                        <div class="m-flex">
                            <input type="checkbox" name="" id="" class="checkbox"/>
                            <div class="m-time">
                                <p> 9:04am </p>
                                <h6>Order accepted by vendor</h6>
                            </div>
                        </div>
                        
                    </div>

                    <div class="m-leftc">
                        <div class="m-flex">
                            <input type="checkbox" name="" id="" class="checkbox"/>
                            <div class="m-time">
                                <p> 9:03am </p>
                                <h6>Vendor is confirming your order</h6>
                            </div>
                        </div>
                        
                    </div>

                    <div class="m-leftc m-m">
                        <div class="m-flex">
                            <input type="checkbox" name="" id="" class="checkbox"/>
                            <div class="m-time">
                                <p> 9:01am </p>
                                <h6>Your payment is being processed</h6>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div class="m-right">
                    <h3>YOUR  ORDER DETAILS</h3>
                    <div class="m-order">
                        <div class="m-lft">
                            <h4>5x veg mix</h4>
                            <h4>2x chicken burger</h4>
                            <h4>1x coca cola</h4><br/>
                            <p>Subtotal</p>
                            <p>VAT</p>
                            <p>delivery fee</p><br/>
                            <h4>TOTAL</h4>
                        </div>
                        <div class="m-rght">
                            <p>₦ 4,300</p>
                            <p>₦3,800</p>
                            <p>₦500</p><br/>

                            <p>₦8,600</p>
                            <p>₦180</p>
                            <p>₦500</p><br/>
                            <p>₦17,800</p>
                        </div>
                    </div>

                    <div class="m-last">
                        <h5>delivery address</h5>
                        <p>Ultricies facilisi quis rhoncus metus euismod eget. Lorem fringilla varius sed aliquam. Ut ut non mi tellus massa diam.</p>
                    </div>
                </div>
            </div>
        </div>
                    
    </div>
    


            
  )
}

export default Progress