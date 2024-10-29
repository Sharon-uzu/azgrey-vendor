// import React, { useState, useRef, useContext } from "react";
import React, { useState } from "react";
import x from '../assets/x.svg';
import ride from '../assets/ride-removebg-preview.png';
import call from '../assets/call-removebg-preview (1).png';
import location from '../assets/location-removebg-preview (1).png';
import pay from '../assets/pay.png';
import Select from "react-select";
import voucher from '../assets/voucher-removebg-preview.png'
import { useNavigate } from 'react-router-dom';



const Checkout = () => {
    const navigate = useNavigate();

  const saveItem = () => {
    navigate('/OrderR/Store2')
  }

  const saveItem2 = () => {
    navigate('/Progress')
  }

    // var two = document.getElementById('two')


    function check1(){
     if(document.getElementById("two").checked){
         document.getElementById('phone').style.display = 'block';
         document.getElementById('delivery').style.display = 'none'
       }else{
         document.getElementById('phone').style.display = 'none';
         document.getElementById('delivery').style.display = 'block'
       }
    }
 
     var pop1 = document.getElementById('pop1');
     var pop2 = document.getElementById('pop2');
     var black = document.getElementById('black');
    //  var edit1 = document.getElementById('edit1');
    //  var edit2 = document.getElementById('edit2');
    //  var edit3 = document.getElementById('edit3');
     
 
     var output = document.getElementById('output');
    var new1 = document.getElementById('new');
    // var btn1 = document.getElementById('btn1');
    var output1 = document.getElementById('output1');
    var new2 = document.getElementById('new2');
    // var btn2 = document.getElementById('btn2');
 
     
 
    function ed2(){
       black.style.display = 'block';
       pop1.style.display = 'block'
     }
 
     function ed3(){
       black.style.display = 'block';
       pop2.style.display = 'block'
     }
 
    //  function func1(){
    //    output.innerHTML = new1.value;
    //  }
 
    //  btn1.addEventListener('click', func1);
 
     function save2(){
       

       if(document.getElementById('new2').value === "") {
            alert('Please enter new address');
            return false;
        } else{
            black.style.display = 'none';
            pop2.style.display = 'none';
            output1.innerHTML = new2.value;
        }
     }
 
    //  btn2.addEventListener('click', func2);
 
 
 
 
     function save1(){
       if(new1.value === "") {
         alert('Please enter new number');
         return false;
     } else{
       black.style.display = 'none';
       pop1.style.display = 'none';
       output.innerHTML = new1.value;
     }
     }
 
    //  function save2(){
    //    if(document.getElementById('new2').value === "") {
    //      alert('Please enter new address');
    //      return false;
    //  } else{
    //    black.style.display = 'none';
    //    pop2.style.display = 'none'
    //  }
    //  }
 
     
    // const [gender, setGender] = React.useState("male");
 

     
     
     
 
 
//      function ckChange(el) {
//    var ckName = document.getElementsByName(el.name);
//    for (var i = 0, c; c = ckName[i]; i++) {
//     c.disabled = !(!el.checked || c === el);
//    }
//  }

    // function ckChange(el) {
    //   var ckName = document.getElementsByName(el.name);
    //   for (var i = 0, c; c = ckName[i]; i++) {
    //    c.disabled = !(!el.checked || c === el);
    //   }
    // }
    

// function selectOnlyThis(id){
//   var myCheckbox = document.getElementsByName("myCheckbox");
//   Array.prototype.forEach.call(myCheckbox,function(el){
//   	el.checked = false;
//   });
//   id.checked = true;
// }

 

    const [selectPayment, setSelectPayment] = useState();
    const option = [
        { value: "Card", label: "Card" },
        { value: "Transfer", label: "Transfer" },
        
      ];


  return (
    <div>
        
  <section class="checks">
    <form method="get" action="">
      <div class="check">
          <h3>CheckOut</h3>
          <div class="x1"><img src={x} alt=""  onClick={saveItem} style={{cursor:'pointer'}}/></div>
      </div>

      <div class="check-flex">
        <div class="c-left">
          <div class="left-c">
            <div class="ch-box">
              <div class="c-img">
            <img src={ride} alt=""/>
              </div>
              <div class="c-text">
                <h2>Delivery</h2>
                <p>Delivery in 20 - 40 mins</p>
              </div>
            </div>

            <div class="form">

            

              {/* <p><input type="checkbox" name="" id="one"/> <span>For Self</span></p>
              <p><input type="checkbox" name="" id="two" onclick="isChecked()"/> <span>For Friend</span></p> */}

              <tr>

                <td><input type="checkbox" name="progress" id="progress1" value="1" tabIndex="1" onClick={() => (
                  check1()) 
                  // (ckChange(this))
                  }   style={{marginRight:'5px'}} required/>For Self</td>
              </tr>
              <tr>
                <td><input type="checkbox" name="progress" id="two" value="1" tabIndex="1"  onClick={() =>(
                  check1()) 
                  // (ckChange(this))
                  } style={{marginRight:'5px'}} required/>For Friend</td>
              </tr>

                <td>
                 <input type="checkbox" name="progress" id="progress1" value="1" tabIndex="1"
               style={{marginRight:'5px'}} required/>
                 For Self</td>
              
              <tr>
                <td>

                   
                  <input type="checkbox" name="progress" id="two" value="1" 
                tabIndex="1"  onClick={() =>(check1())} style={{marginRight:'5px'}} required/>
                 For Friend</td>
              </tr> 

              

            </div>

            <div class="c-input" id="phone">
              <input type="text" name="" id="" placeholder="Friend's phone number" required/>
              <input type="text" name="" id="" placeholder="Friend's Location" required/>

              
            </div>

            <div class="ch-box h-box">
              <div class="c-img">
                <img src={call} alt=""/>
              </div>
              <div class="c-text">
                <h2>Phone Number</h2>
                <p id="output">+234 768933028</p>
                
              </div>
              <div class="edit" id="edit2" onClick={() => ed2() } style={{cursor: 'pointer'}}><p>Edit</p></div>
            </div>

            <div class="ch-box" id="delivery">
              <div class="c-img">
            <img src={location} alt=""/>
              </div>
              <div class="c-text">
                <h2>Your Delivery Location</h2>
                <p id="output1">#2 Palace road, Off Ada Ahoada RD, Omoku</p>
              </div>
              <div class="edit" id="edit3" onClick={() =>(ed3())} style={{cursor:'pointer'}}><p>Edit</p></div>
            </div>

            

            <div class="ch-box ch">
              <div class="c-img">
                <img src={pay} alt=""/>
              </div>
              <div class="c-text">
                <h2>Payment Method</h2>
                <select name="" id="" className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-full mx-auto bg-transparent rounded-md text-start h-10 outline-none bg-transparent">
                  <option value="1">Card</option>
                  <option value="2">Transfer</option>
                </select>
                
              </div>
              
            
            </div>
            
            <div class="p-box">
              <div class="btn-group drop">

              <Select
                  placeholder=" Choose payment method"
                  options={option}       
                  value={selectPayment}
                  onChange={(text) => setSelectPayment(text)}
                  isSearchable={true}
                  required
                  // isMulti
                  className="border-solid border-rgb(59 130 246 / 0.5) border-2 w-full mx-auto  rounded-md text-start h-10 outline-none bg-transparent"
                />

                
              
              </div>
            </div>




          </div>
        </div>
        <div class="c-right">

          <div class="p-box">
            <div class="c-img">
              <img src="../Asset/image/azn-removebg-preview.png" alt=""/>
            </div>
            <div class="c-text ">
              <h2>Get Free Delivery With AZ Grey Express</h2>
            </div>
          </div>

          <input type="text" name="" id="" placeholder="Note (allergies.....)" class="note" style={{backgroundColor: 'rgba(243, 240, 240, 0.4)', height: '45px', border: 'none'}}/>
          

          <div class="sub">
            <p>Sub total</p>
            <p> ₦ 6,000.00</p>
          </div>

          <div class="sub">
            <p>VAT (10%)</p>
            <p>  ₦ 600.00</p>
          </div>

          <div class="sub">
            <p>Delivery Fee</p>
            <p>  ₦ 320.00</p>
          </div>

          <div class="sub">
            <p>Container Charges</p>
            <p>  ₦ 300.00</p>
          </div>


         


          <div class="sub total">
            <h4>Total <span style={{fontWeight: '500'}}>(Incl VAT)</span> </h4>
            <h4>  ₦ 7,220.00</h4>
          </div>

          <div class="voucher">
                <div className="h-full w-10/12 m-auto flex jusify-between items-center">
                <img src={voucher} alt=""/>
                <p>Voucher code</p>
                <input type="text" />
            </div>
            
          </div>

          <div class="submit">
            <button type="submit" onClick={()=> saveItem2()}>Place Order</button>
          </div>

        </div>
        

        </div>
        <div class="black" id="black"></div>
        <div class="abs1" id="pop1">
          <p>Change Phone Number</p>
          <input type="tel" name="" id="new" placeholder="Add new number" required/>
          <button type="button" id="btn1" onClick={() =>(save1())}>Save</button>
        </div>

        <div class="abs1" id="pop2">
          <p>Change Location</p>
          <input type="text" name="" id="new2" placeholder="Add new address" required/>
          <button type="button" id="btn2" onClick={() =>(save2())}>Save</button>
        </div>
      
    </form>
  </section>
    </div>
  )
}

export default Checkout