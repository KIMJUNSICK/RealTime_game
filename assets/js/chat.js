export const handleNotif = data => {
  const { message, nickname } = data;
  console.log(`${nickname} : ${message}`);
};
