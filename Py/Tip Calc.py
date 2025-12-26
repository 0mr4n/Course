print("Welcome to tip calc!")
Subtotal = float(input("whats the total bill?\n$"))
Tip = (int(input("How much would you like to tip? 10, 15 or 20?\n"))/100) * Subtotal
Total = Subtotal + Tip
People = int(input("How many people to split the bill?\n"))
print("Each person pays: "+ str(round((Total/People),3)))
