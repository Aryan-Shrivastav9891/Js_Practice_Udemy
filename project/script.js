//! make sure element are loaded
document.addEventListener("DOMContentLoaded", () => {
  //! Selection Element
  const counterValue = document.getElementById("counter-value");
  const increaseBtn=document.getElementById('increase-btn')
  const decreaseBtn=document.getElementById('decrease-btn')
  const resetBtn=document.getElementById('reset-btn')
  //! global value
  let count = 0

  //! add Event listeners to the value
  increaseBtn.addEventListener('click' , ()=>{
    count++
// ! update the counter value
    // counterValue.innerHTML = count    
    updateCounter()
  })
  decreaseBtn.addEventListener('click' , ()=>{
    count--
    // counterValue.textContent = count
    updateCounter()
  })
  resetBtn.addEventListener('click' , ()=>{
    count=0
    updateCounter()
  })
  function updateCounter (){
    counterValue.textContent = count
}
});

// update counter function

