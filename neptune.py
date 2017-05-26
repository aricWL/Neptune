class Node:

    def __init__(self, bottom_left, top_right):
        self.bottom_left = bottom_left
        self.top_right = top_right
        self.children = []
        self.coord = None

    def insertCoord(bottom_left, top_right):
        if(self.coord == None):
            self.coord = [bottom_left, top_right]
        else:
            if(len(self.children) > 0):
                # Check which child it fits in best
            else:
                # Create child for the coord to go in 