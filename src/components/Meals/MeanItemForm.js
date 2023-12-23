import Input from '../UI/Input';
import classes from './MealItemsForm.module.css'
import React,{useRef,useState} from 'react';


const MealItemForm = (props) => {

  const [amountIsValid, setAmountIsValid] =useState(true);
  const amounntInputRef=useRef();
  const submitHandler=event=>{
    event.preventDefault();

  const enteredAmount=amounntInputRef.current.value; 
  const enteredAmountNumber= +enteredAmount;
    
    if(
      enteredAmount.trim().length === 0||
      enteredAmountNumber<1 ||
      enteredAmountNumber>5
    ){
      setAmountIsValid(false);
      return ;
    }
    else{
      setAmountIsValid(true)
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <div>
        <form className={classes.form} onSubmit={submitHandler} >
            <Input
                ref={amounntInputRef} 
                label="Quantity" 
                input={{
                id: 'amount',
                type: 'number',
                min:'1',
                max:'5',
                step: '1',
                defaultValue:'1'
            }} />
            <button>Add</button>
            {!amountIsValid && <p>please enter a valid amount (1-5).</p>}


            
            
        </form>
    </div>
  )
}

export default MealItemForm