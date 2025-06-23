const mockOrders = [
  { id: '#001', customer: 'Jacky', date: '02/9/2025', status: 'Completed' },
  { id: '#002', customer: 'Emile', date: '03/9/2025', status: 'Completed' },
  { id: '#003', customer: 'Jone', date: '05/9/2025', status: 'Pending' },
  { id: '#004', customer: 'Mark', date: '22/9/2025', status: 'Completed' },
];


describe('OrderPage Component', () => {
  beforeEach(() => {
    render(<OrderPage orders={mockOrders} />);
  });

  it('renders navigation buttons', () => {
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Order/i)).toBeInTheDocument();
    expect(screen.getByText(/Product/i)).toBeInTheDocument();
    expect(screen.getByText(/Payment/i)).toBeInTheDocument();
  });

  it('renders the search input', () => {
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });

  it('renders the Filter by Date dropdown', () => {
    expect(screen.getByText(/Filter by Date/i)).toBeInTheDocument();
  });

  it('renders order table headers', () => {
    expect(screen.getByText(/Order/i)).toBeInTheDocument();
    expect(screen.getByText(/Customer/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
  });

  it('renders all orders by default', () => {
    expect(screen.getByText('#001')).toBeInTheDocument();
    expect(screen.getByText('Jacky')).toBeInTheDocument();
    expect(screen.getByText('02/9/2025')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('renders status buttons with correct labels', () => {
    expect(screen.getAllByText('Completed').length).toBeGreaterThan(0);
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });

  it('filters orders by status: Completed', () => {
    fireEvent.click(screen.getByText(/Completed/i, { selector: 'button,span' })); // Tab
    expect(screen.queryByText('Pending')).not.toBeInTheDocument();
    expect(screen.getAllByText('Completed').length).toBe(3);
  });

  it('filters orders by status: Pending', () => {
    fireEvent.click(screen.getByText(/Pending/i, { selector: 'button,span' })); // Tab
    expect(screen.getByText('Jone')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.queryAllByText('Completed').length).toBe(0);
  });

  it('shows all orders when "All" tab is clicked', () => {
    fireEvent.click(screen.getByText(/All/i, { selector: 'button,span' }));
    expect(screen.getAllByText(/Completed/i).length).toBe(3);
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });

  it('filters orders by search input', () => {
    const searchInput = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchInput, { target: { value: 'Jone' } });
    expect(screen.getByText('Jone')).toBeInTheDocument();
    expect(screen.queryByText('Jacky')).not.toBeInTheDocument();
  });

  it('filters orders by date (edge case: no orders)', () => {
    fireEvent.change(screen.getByLabelText(/Filter by Date/i), { target: { value: '01/01/2020' } });
    expect(screen.queryByText('#001')).not.toBeInTheDocument();
    expect(screen.queryByText('No orders found')).toBeInTheDocument();
  });

  it('handles empty orders gracefully (edge case)', () => {
    render(<OrderPage orders={[]} />);
    expect(screen.getByText('No orders found')).toBeInTheDocument();
  });

});