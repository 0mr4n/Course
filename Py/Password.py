import random
import string

def generate_password(length=16, use_uppercase=True, use_lowercase=True, 
                      use_digits=True, use_special=True):
    """Generate a random password with specified criteria."""
    
    characters = ""
    
    if use_uppercase:
        characters += string.ascii_uppercase
    if use_lowercase:
        characters += string.ascii_lowercase
    if use_digits:
        characters += string.digits
    if use_special:
        characters += string.punctuation
    
    if not characters:
        raise ValueError("At least one character type must be selected")
    
    password = ''.join(random.choice(characters) for _ in range(length))
    return password


def main():
    print("=== Password Generator ===\n")
    
    # Get user preferences
    try:
        length = int(input("Password length (default 16): ") or 16)
    except ValueError:
        length = 16
    
    uppercase = input("Include uppercase? (Y/n): ").lower() != 'n'
    lowercase = input("Include lowercase? (Y/n): ").lower() != 'n'
    digits = input("Include numbers? (Y/n): ").lower() != 'n'
    special = input("Include special characters? (Y/n): ").lower() != 'n'
    
    try:
        count = int(input("How many passwords? (default 1): ") or 1)
    except ValueError:
        count = 1
    
    print("\n--- Generated Passwords ---")
    for i in range(count):
        password = generate_password(length, uppercase, lowercase, digits, special)
        print(f"{i+1}. {password}")


if __name__ == "__main__":
    main()