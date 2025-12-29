# size = input("Whats the size of your desired pizza?L, M and S")
# pep = input("Do you want pepperoni with it?Y/N")
# che = input("Do you want a cheese with it?Y/N")
# price = 0
# if size == "l" or size == "L":
#     price = 25
#     if pep == "Y":
#         price += 3
#     if che == "Y":
#         price += 1  
# elif size == "m" or size == "M":
#     price = 20
#     if pep == "Y":
#         price += 3
#     if che == "Y":
#         price += 1  
# else:
#     price =  15
#     if pep == "Y":
#         price += 2
#     if che == "Y":
#         price += 1  

# print(f"{price}$")

# IMPROVED VERSION:
size = input("What's the size of your desired pizza? L, M or S: ").upper()
pep = input("Do you want pepperoni with it? Y/N: ").upper()
che = input("Do you want cheese with it? Y/N: ").upper()

# Base prices for each size
prices = {"L": 25, "M": 20, "S": 15}
price = prices.get(size, 15)

# Add pepperoni cost
if pep == "Y":
    price += 2 if size == "S" else 3

# Add cheese cost
if che == "Y":
    price += 1

print(f"${price}")