export type Transactions = {
  id: number;
  transactionId: string;
  transactionAmount: number;
  serviceType: ServiceType;
  serviceCharge: number;
  vat: number;
  transactionType: TransactionType;
  date: string;
  status: Status;
  description: string;
  remark: string;
};

export enum TransactionType {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
}

export enum Status {
  SUCCESSFUL = "SUCCESSFUL",
  PENDING = "PENDING",
  FAILED = "FAILED",
}

export enum ServiceType {
  SERVICE = "SERVICE",
  TRANSACTION = "TRANSACTION",
}

export const transactions: Transactions[] = [
  {
    id: 1,
    transactionId: "T001",
    transactionAmount: 150.75,
    serviceType: ServiceType.SERVICE,
    serviceCharge: 10.0,
    vat: 15.08,
    transactionType: TransactionType.CREDIT,
    date: "10-06-2024",
    status: Status.SUCCESSFUL,
    description: "Salary deposit",
    remark: "nil",
  },
  {
    id: 2,
    transactionId: "T002",
    transactionAmount: 50.0,
    serviceType: ServiceType.TRANSACTION,
    serviceCharge: 5.0,
    vat: 7.5,
    transactionType: TransactionType.DEBIT,
    date: "11-06-2024",
    status: Status.PENDING,
    description: "Grocery shopping",
    remark: "nil",
  },
  {
    id: 3,
    transactionId: "T003",
    transactionAmount: 200.0,
    serviceType: ServiceType.SERVICE,
    serviceCharge: 20.0,
    vat: 30.0,
    transactionType: TransactionType.CREDIT,
    date: "12-06-2024",
    status: Status.SUCCESSFUL,
    description: "Freelance payment",
    remark: "nil",
  },
  {
    id: 4,
    transactionId: "T004",
    transactionAmount: 75.5,
    serviceType: ServiceType.TRANSACTION,
    serviceCharge: 7.55,
    vat: 11.33,
    transactionType: TransactionType.DEBIT,
    date: "13-06-2024",
    status: Status.SUCCESSFUL,
    description: "Utility bill",
    remark: "nil",
  },
  {
    id: 5,
    transactionId: "T005",
    transactionAmount: 500.0,
    serviceType: ServiceType.SERVICE,
    serviceCharge: 50.0,
    vat: 75.0,
    transactionType: TransactionType.CREDIT,
    date: "14-06-2024",
    status: Status.PENDING,
    description: "Project milestone payment",
    remark: "nil",
  },
  {
    id: 6,
    transactionId: "T006",
    transactionAmount: 120.0,
    serviceType: ServiceType.TRANSACTION,
    serviceCharge: 12.0,
    vat: 18.0,
    transactionType: TransactionType.DEBIT,
    date: "15-06-2024",
    status: Status.SUCCESSFUL,
    description: "Online shopping",
    remark: "nil",
  },
  {
    id: 7,
    transactionId: "T007",
    transactionAmount: 60.0,
    serviceType: ServiceType.SERVICE,
    serviceCharge: 6.0,
    vat: 9.0,
    transactionType: TransactionType.DEBIT,
    date: "16-06-2024",
    status: Status.PENDING,
    description: "Dining out",
    remark: "nil",
  },
  {
    id: 8,
    transactionId: "T008",
    transactionAmount: 1000.0,
    serviceType: ServiceType.TRANSACTION,
    serviceCharge: 100.0,
    vat: 150.0,
    transactionType: TransactionType.CREDIT,
    date: "17-06-2024",
    status: Status.SUCCESSFUL,
    description: "Loan disbursement",
    remark: "nil",
  },
  {
    id: 9,
    transactionId: "T009",
    transactionAmount: 40.0,
    serviceType: ServiceType.SERVICE,
    serviceCharge: 4.0,
    vat: 6.0,
    transactionType: TransactionType.DEBIT,
    date: "18-06-2024",
    status: Status.SUCCESSFUL,
    description: "Gasoline",
    remark: "nil",
  },
  {
    id: 10,
    transactionId: "T010",
    transactionAmount: 300.0,
    serviceType: ServiceType.TRANSACTION,
    serviceCharge: 30.0,
    vat: 45.0,
    transactionType: TransactionType.CREDIT,
    date: "19-06-2024",
    status: Status.FAILED,
    description: "Stock dividend",
    remark: "nil",
  },
];
