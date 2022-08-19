type OtherPage = {
  page: number;
  url: string;
}

type ResponseMultiple = {
  data: any[];
  totalItems: number;
  totalPages: number;
  prev?: OtherPage;
  next?: OtherPage;
}

export { ResponseMultiple };