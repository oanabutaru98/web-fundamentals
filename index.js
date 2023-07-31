function changeStyle() {
    console.log("testing exec of changeStyle")
    document.getElementById('special-header').className='changed-style'
}
const changeText = function() {
    console.log("testing exec of changeText")
    document.getElementById('superperson').textContent='a super person'
}
const changeText2 = () =>  {
    console.log("testing exec of changeText2")
    document.getElementById('theFlash').textContent='jay the flash'
}