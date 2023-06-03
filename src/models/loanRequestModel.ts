interface LoanCreationModel {
    type: string;
    loan_amount: string;
    car_model?: string;
    monthly_payment: string;
}

export default LoanCreationModel;