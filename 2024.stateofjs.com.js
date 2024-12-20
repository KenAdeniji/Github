/*
export word = "word";

export function nullishCoalescing(first, second)
{
	return first ?? second;
}
*/

var module20241219 =	//2024-12-19T09:30:00
{
	//Return first value, or second value if first value is null or undefined.
	nullishCoalescing: function(first, second)
	{
		return first ?? second;
	}
	,
	
	//Operators to assign a value to a variable based on its own truthy/falsy status.
	logicalAssignment: function
	(
		willTargetTuesdayDecemberThirtyFirst
	)
	{
		willTargetTuesdayDecemberThirtyFirst ||= new Date(2024, 11, 31);
		return willTargetTuesdayDecemberThirtyFirst;
	}	
}	
