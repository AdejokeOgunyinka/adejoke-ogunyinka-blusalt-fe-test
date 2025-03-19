import { ArrowDownIcon } from "@/components/icons";
import { ArrowUpIcon } from "../components/icons/arrow-up";
export const NOTIFICATIONS = [
  { id: 1, type: "bug", description: "You fixed a bug.", time: "Just now" },
  {
    id: 2,
    type: "user",
    description: "New user registered.",
    time: "59 minutes ago",
  },
  { id: 3, type: "bug", description: "You fixed a bug.", time: "12 hours ago" },
  {
    id: 4,
    type: "subscription",
    description: "Andi Lane subscribed to you.",
    time: "Today, 11:59 AM",
  },
];

export const ACTIVITIES = [
  {
    id: 1,
    description: "Changed the style.",
    time: "Just now",
    img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    description: "Released a new version.",
    time: "59 minutes ago",
    img: "https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    description: "Submitted a bug.",
    time: "12 hours ago",
    img: "https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    description: "Modified A data in Page X.",
    time: "Today, 11:59 AM",
    img: "https://plus.unsplash.com/premium_photo-1661448623542-eb6ec42ec5b2?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    description: "Deleted a page in Project X.",
    time: "Feb 2, 2024",
    img: "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const CONTACTS = [
  {
    id: 1,
    name: "Natali Craig",
    img: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Drew Cano",
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Andi Lane",
    img: "https://plus.unsplash.com/premium_photo-1689266188052-704d33673e69?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Koray Okumus",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Kate Morrison",
    img: "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Melody Macy",
    img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const DASHBOARD_STATISTICS = [
  {
    id: 1,
    title: "Requests",
    value: "7,265",
    percentage: "+11.02",
    icon: <ArrowUpIcon />,
    className: "bg-[#E3F5FF]",
  },
  {
    id: 2,
    title: "KYC",
    value: "3,671",
    percentage: "-0.03",
    icon: <ArrowDownIcon />,
    className: "bg-[#E5ECF6]",
  },
  {
    id: 3,
    title: "Tasks",
    value: "156",
    percentage: "+15.03",
    icon: <ArrowUpIcon />,
    className: "bg-[#E3F5FF]",
  },
  {
    id: 4,
    title: "Customers",
    value: "2,318",
    percentage: "+6.08",
    icon: <ArrowUpIcon />,
    className: "bg-[#E5ECF6]",
  },
];

export const TOTAL_USERS_DATA = [
  {
    name: "Jan",
    last_year: 4000,
    this_year: 2400,
  },
  {
    name: "Feb",
    last_year: 3000,
    this_year: 1398,
  },
  {
    name: "Mar",
    last_year: 2000,
    this_year: 9800,
  },
  {
    name: "Apr",
    last_year: 2780,
    this_year: 3908,
  },
  {
    name: "May",
    last_year: 1890,
    this_year: 4800,
  },
  {
    name: "Jun",
    last_year: 2390,
    this_year: 3800,
  },
  {
    name: "Jul",
    last_year: 3490,
    this_year: 4300,
  },
];

export const REPORTS_GENERATED_DATA = [
  { name: "Linux", amt: "15000" },
  { name: "Mac", amt: "27000" },
  { name: "iOS", amt: "19000" },
  { name: "Windows", amt: "30000" },
  { name: "Android", amt: "10000" },
  { name: "Other", amt: "25000" },
];

export const TRAFFIC_BY_LOCATION_DATA = [
  { name: "Nigeria", value: 3860 },
  { name: "Kenya", value: 3080 },
  { name: "Ghana", value: 2250 },
  { name: "Benin Republic", value: 810 },
];

export const MARKETING_AND_SEO_DATA = [
  { name: "Jan", amt: "15000" },
  { name: "Feb", amt: "27000" },
  { name: "Mar", amt: "19000" },
  { name: "Apr", amt: "30000" },
  { name: "May", amt: "10000" },
  { name: "Jun", amt: "25000" },
  { name: "Jul", amt: "15000" },
  { name: "Aug", amt: "27000" },
  { name: "Sep", amt: "19000" },
  { name: "Oct", amt: "30000" },
  { name: "Nov", amt: "10000" },
  { name: "Dec", amt: "25000" },
];

export const TRAFFIC_BY_LOCATION_PERCENTAGE_DATA = [
  { name: "Nigeria", value: 3860, percent: "38.6", color: "bg-[#1C1C1C]" },
  { name: "Kenya", value: 3080, percent: "22.5", color: "bg-[#B1E3FF]" },
  { name: "Ghana", value: 2250, percent: "30.8", color: "bg-[#A1E3CB]" },
  { name: "Benin Republic", value: 810, percent: "8.1", color: "bg-[#A8C5DA]" },
];

export const TRAFFIC_BY_WEBSITE_DATA = [
  {
    name: "Google",
    amt1: "0.7",
    amt2: "0.7",
    amt3: "0.7",
    gap: "0.2",
  },
  {
    name: "Youtube",
    amt1: "1.2",
    amt2: "1.2",
    amt3: "1.2",
    gap: "0.2",
  },
  {
    name: "Instagram",
    amt1: "0.9",
    amt2: "0.9",
    amt3: "0.9",
    gap: "0.2",
  },
  { name: "Pinterest", amt1: "2", amt2: "2", amt3: "2", gap: "0.2" },
  {
    name: "Facebook",
    amt1: "0.5",
    amt2: "0.5",
    amt3: "0.5",

    gap: "0.2",
  },
  {
    name: "Twitter",
    amt1: "0.9",
    amt2: "0.9",
    amt3: "0.9",
    gap: "0.2",
  },
  {
    name: "Snapchat",
    amt1: "5",
    amt2: "5",
    amt3: "5",
    gap: "0.2",
  },
];
