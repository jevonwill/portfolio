function maxiumum(a,b,maxx) {
    var first = a;
    var second = b;
    var maxx = 0;
    
    if (first > second)
    {
        print("First is Greater");
        maxx += 1;
    }
    else 
    {
        print("Second is Greater");
        maxx -= 1;
    }

    if (maxx > 0)
    {
        print(first);
    }
    else
    {
        print(second);
    }

    maxiumum(10, 5);
}

