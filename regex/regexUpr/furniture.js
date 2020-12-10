function furniture(arr){
   let result = `Bought furniture:\n`;
   let total = 0

   for(const line of arr) {
      let regex = />>(?<item>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g;
      // if(line == 'Purchase') break;
       let match = regex.exec(line)  

       if(match){
          result += match.groups['item'] + `\n`
          total += Number(match.groups.price) * Number(match.groups.quantity)
       }  
   }
   result += `Total money spend: ${total.toFixed(2)}`
   console.log(result)
}

furniture([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ])
// Bought furniture:
// Sofa
// TV
// Total money spend: 2436.69