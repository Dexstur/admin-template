export interface MerchantDetails {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  merchantId: string;
  address: string;
  status: MerchantStatus;
  accountNumber: string;
}

export enum MerchantStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DISABLED = "DISABLED",
}

export const merchants: MerchantDetails[] = [
  {
    id: "1",
    firstName: "Alice",
    lastName: "Smith",
    password: "password",
    merchantId: "MX-120496",
    status: MerchantStatus.ACTIVE,
    address: "1 Elm St",
    accountNumber: "0123456789",
  },
  {
    id: "2",
    firstName: "Bob",
    lastName: "Johnson",
    password: "password",
    merchantId: "MX-120497",
    status: MerchantStatus.ACTIVE,
    address: "2 Oak St",
    accountNumber: "9876543210",
  },
  {
    id: "3",
    firstName: "Carol",
    lastName: "Williams",
    password: "password",
    merchantId: "MX-120498",
    status: MerchantStatus.ACTIVE,
    address: "3 Pine St",
    accountNumber: "1234567890",
  },
  {
    id: "4",
    firstName: "David",
    lastName: "Jones",
    password: "password",
    merchantId: "MX-120499",
    status: MerchantStatus.ACTIVE,
    address: "4 Maple St",
    accountNumber: "2345678901",
  },
  {
    id: "5",
    firstName: "Eve",
    lastName: "Brown",
    password: "password",
    merchantId: "MX-120500",
    status: MerchantStatus.ACTIVE,
    address: "5 Birch St",
    accountNumber: "3456789012",
  },
  {
    id: "6",
    firstName: "Frank",
    lastName: "Davis",
    password: "password",
    merchantId: "MX-120501",
    status: MerchantStatus.ACTIVE,
    address: "6 Cedar St",
    accountNumber: "4567890123",
  },
  {
    id: "7",
    firstName: "Grace",
    lastName: "Miller",
    password: "password",
    merchantId: "MX-120502",
    status: MerchantStatus.ACTIVE,
    address: "7 Ash St",
    accountNumber: "5678901234",
  },
  {
    id: "8",
    firstName: "Hank",
    lastName: "Wilson",
    password: "password",
    merchantId: "MX-120503",
    status: MerchantStatus.ACTIVE,
    address: "8 Willow St",
    accountNumber: "6789012345",
  },
  {
    id: "9",
    firstName: "Ivy",
    lastName: "Moore",
    password: "password",
    merchantId: "MX-120504",
    status: MerchantStatus.ACTIVE,
    address: "9 Fir St",
    accountNumber: "7890123456",
  },
  {
    id: "10",
    firstName: "Jack",
    lastName: "Taylor",
    password: "password",
    merchantId: "MX-120505",
    status: MerchantStatus.ACTIVE,
    address: "10 Palm St",
    accountNumber: "8901234567",
  },
];
