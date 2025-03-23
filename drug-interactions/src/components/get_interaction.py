from transformers import AutoModelForCausalLM, AutoTokenizer

def generate_response(prompt, checkpoint="HuggingFaceTB/SmolLM2-1.7B-Instruct", device="cpu"):
    tokenizer = AutoTokenizer.from_pretrained(checkpoint)
    model = AutoModelForCausalLM.from_pretrained(checkpoint).to(device)
    
    # Prepare the input text
    messages = [{"role": "user", "content": prompt}]
    input_text = tokenizer.apply_chat_template(messages, tokenize=False)
    
    # Tokenize the input
    inputs = tokenizer.encode(input_text, return_tensors="pt").to(device)
    
    # Generate response
    outputs = model.generate(inputs, max_new_tokens=500, temperature=0.2, top_p=0.9, do_sample=True)
    
    # Decode and return only the assistant's response
    decoded_output = tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    # Extract the assistant's reply (removes the system and user labels)
    assistant_response = decoded_output.split("<|im_start|>assistant")[1].split("<|im_end|>")[0].strip()
    
    return assistant_response

# Main function to run when script is executed
if __name__ == "__main__":
    prompt = input("Enter the prompt: ")
    response = generate_response(prompt)
    print("\nAssistant's Response:\n")
    print(response)
