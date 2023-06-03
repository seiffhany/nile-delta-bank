export interface CreditCardProps {
    creditCardNum : string;
    type: "MASTERCARD" | "VISACARD";
    onClick?: () => void;
}

const CustomCreditCard = (props: CreditCardProps) => {
    return (
      <div className="credit_card" onClick={props.onClick}>
        <div className='credit_card_header'>
          <img className={(props.type === "VISACARD") ? "visa" : ""} src={props.type === "MASTERCARD" ?"/res/Nile Delta Icons/mastercard colored.svg" : "/res/Nile Delta Icons/visa.svg"}
          alt="" />
          <p>{props.creditCardNum}</p>
        </div>
        <p style={{fontSize: 17}}>View Transactions</p>
      </div>

    );
}

export default CustomCreditCard;