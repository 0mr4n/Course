size = input("Whats the size of your desired pizza?L, M and S")
pep = input("Do you want pepperoni with it?Y/N")
che = input("Do you want a cheese with it?Y/N")
price = 0
if size == "l" or size == "L":
    price = 25
    if pep == "Y":
        price += 3
    if che == "Y":
        price += 1  
elif size == "m" or size == "M":
    price = 20
    if pep == "Y":
        price += 3
    if che == "Y":
        price += 1  
else:
    price =  15
    if pep == "Y":
        price += 2
    if che == "Y":
        price += 1  

print(f"{price}$")