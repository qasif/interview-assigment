import './Form.css'

function Form ( ) {
    return (
        <form>
    <div className="formparent" data-aos="zoom-out-down">
    <div class="row">


    <div class="col-6 my-2" >
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col-6 my-2">
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
    <div class="col-6 my-2">
      <input type="email" class="form-control" placeholder="Email"/>
    </div>
    <div class="col-6 my-2">
      <input type="text" class="form-control" placeholder="phone"/>
    </div>
    <div class="col-12 my-2">
      <input type="text" class="form-control" placeholder="Address"/>
    </div>
    <div class="col-12 my-2">
      <input type="text" class="form-control" placeholder="positon"/>
    </div>
    <div class="col-12 my-2">
      <input type="text" class="form-control" placeholder="company"/>
    </div>

    <div class="col-12 my-2">
      <textarea type="text" class="form-control" placeholder="Last name"/>
    </div>
<div className='col-12 my-2 text-center'>
<button className='submitbtn'>Submit</button>

</div>

    </div>

  </div>
</form>
    )
}

export default Form