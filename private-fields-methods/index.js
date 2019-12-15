/* As most of the compilers are not supporting this features to run, you should verify this directly in chrome console
class Counter {
    #x = 0;  
    increment() {
      this.#x++;
    }  
    decrement() {
      this.#x--;
    }  
    get #num(){
      return this.#x;
    }
  }
  
  const c = new Counter();
  c.increment(); 
  c.increment(); 
  c.decrement(); 
  console.log(c.getNum());
  console.log(c.#x); //Uncaught SyntaxError: Private field '#x'.
  */