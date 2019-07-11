using System;

namespace ExerciseCS
{
    class Triangle
    {
        readonly int Side1;
        int Side2;
        int Side3;

        public Triangle(int side1, int side2, int side3)
        {
            Side1 = side1;
            Side2 = side2;
            Side3 = side3;
        }

        public bool isValid()
        {
            if ((Side1 + Side2) > Side3 && (Side1 + Side3) > Side2 && (Side3 + Side2) > Side1)
            { 
                return true;
            }
            else
            {
                return false;
            }
        }

        public int perimeter()
        {
            return Side1 + Side2 + Side3;
        }

        public int area()
        {
            // Heron's formula
            return (Side1 + Side2 + Side3) / 2;
        }

        public string classification()
        {
            if (Side1 == Side2 && Side2 == Side3)
            {
                return "Equilateral";
            }
            else if (Side1 == Side2 || Side1 == Side3 || Side2 == Side3)
            {
                return "Isosceles";
            }
            else
            {
                return "sqalene";
            }
        }
    }
    class Program
    { 
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter the first side of the triangle: ");
            int side1 = int.Parse(Console.ReadLine());
            Console.WriteLine("Please enter the 2nd side of the triangle: ");
            int side2 = int.Parse(Console.ReadLine());
            Console.WriteLine("Please enter the 3rd side of the triangle: ");
            int side3 = int.Parse(Console.ReadLine());

            Triangle triangle1 = new Triangle(side1, side2, side3);
            triangle1.isValid();
            triangle1.perimeter();
            triangle1.area();
            triangle1.classification();
        }
    }
}
