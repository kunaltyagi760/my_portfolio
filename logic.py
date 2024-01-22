def height(node):
    if node == None:
        return 0
    return 1+max(height(node.left),height(node.right))
        
    def f(root):
        if root == None:
            return True
            
        lh = height(root.left)
        rh = height(root.right)
        
        if abs(lh-rh) <= 1 and f(root.left) and f(root.right):
            return True
            
        return False
        
    # optimize sol -1 
    
   