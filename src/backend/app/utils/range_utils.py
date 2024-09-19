def get_range(start, end, prefix='', suffix=''):
    """
    Generate a range string from start and end values.

    Args:
        start (int or float): The start value of the range.
        end (int or float): The end value of the range.
        prefix (str, optional): A string to prepend to each value. Defaults to ''.
        suffix (str, optional): A string to append to each value. Defaults to ''.

    Returns:
        str: A formatted range string. If start and end are equal, returns a single value.
    """
    if start == end:
        return f'{prefix}{start}{suffix}'
    return f'{prefix}{start}{suffix} - {prefix}{end}{suffix}'


def get_price_range(start, end):
    """
    Generate a price range string with shekel symbol.

    Args:
        start (int or float): The start price.
        end (int or float): The end price.

    Returns:
        str: A formatted price range string with shekel symbol (₪).
    """
    return get_range(int(start), int(end), prefix='₪')


def get_percentage_range(start, end):
    """
    Generate a percentage range string.

    Args:
        start (int or float): The start percentage.
        end (int or float): The end percentage.

    Returns:
        str: A formatted percentage range string with % symbol.
    """
    return get_range(start, end, suffix='%')
