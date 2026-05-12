export interface ZohoOpenJob {
  id: string;
  "Job_Opening_ID": string;
  City: string;
  Country: string;
  State: string;
  "Zip Code": string;
  "Created Time": string;
  "Modified Time": string;
  "Date_Opened": string;
  "Target Date": string;
  "Department Name": string;
  Industry: string;
  "Posting_Title": string;
  "Job_Description": string;
  "Remote_Job": string;
  "Work_Experience": string;
  "Required_Skills": string;
  "Job Opening Status": string;
  "Job_Type": string;
  "Number of Positions": string;
  "No of Applications": string;
  "No of Applications Hired": string;
  Publish: string;
}

export type FilterGroup = {
  name: string;
  attrName: keyof ZohoOpenJob;
  label: string;
  items: {
    id: string;
    label: string;
  }[];
  selectedItems: string[];
  onChangeCheck(id: string, checked: boolean): void;
};
