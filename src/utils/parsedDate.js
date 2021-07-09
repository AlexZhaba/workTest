const parsedDate = (date) => {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aut', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${new Date(date).getDate()} ${month[Number(new Date(date).getMonth())]}, ${new Date(date).getFullYear()}`
}

export default parsedDate;