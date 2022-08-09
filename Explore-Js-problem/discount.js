/* 
1. if ticket numbers is less than 100, per ticket price:10
2. if ticket numbers is less than 100,, but less than 200 first 100 ticket will be 100/ticket and rest tickets will be 90 taka per ticket
3. if you purchase more than 200 tickets

first 100---> 100 taka
101-200---> 90 taka
200+---> 70 taka

*/

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;
  let totalTicketPrice = 0;

  if (ticketQuantity <= 100) {
    totalTicketPrice = first100Rate * ticketQuantity;
    return totalTicketPrice;
  } else if (ticketQuantity <= 200) {
    const first100Price = first100Rate * 100;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    totalTicketPrice = restTicketPrice + first100Price;
    return totalTicketPrice;
  } else {
    const first100Price = first100Rate * 100;
    const second100Price = second100Rate * 100;
    const first200Price = first100Price + second100Price;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    totalTicketPrice = first200Price + restTicketPrice;
    return totalTicketPrice;
  }
}

console.log(ticketPrice(201));
