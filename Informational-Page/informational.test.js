test("renders all navigation buttons", () => {
  const { getByText } = render(<NavBar onNavigate={() => {}} />);
  navButtons.forEach((btn) => {
    expect(getByText(btn.label)).toBeInTheDocument();
  });
});

test("calls onNavigate with correct href when a button is clicked", () => {
  const onNavigate = jest.fn();
  const { getByText } = render(<NavBar onNavigate={onNavigate} />);
  navButtons.forEach((btn) => {
    fireEvent.click(getByText(btn.label));
    expect(onNavigate).toHaveBeenCalledWith(btn.href);
  });
});



test("renders Download and Get started buttons", () => {
  const { getByText } = render(
    <ActionButtons onDownload={() => {}} onGetStarted={() => {}} />
  );
  expect(getByText("Download")).toBeInTheDocument();
  expect(getByText("Get started")).toBeInTheDocument();
});

test("calls onDownload when Download is clicked", () => {
  const onDownload = jest.fn();
  const { getByText } = render(
    <ActionButtons onDownload={onDownload} onGetStarted={() => {}} />
  );
  fireEvent.click(getByText("Download"));
  expect(onDownload).toHaveBeenCalled();
});

test("calls onGetStarted when Get started is clicked", () => {
  const onGetStarted = jest.fn();
  const { getByText } = render(
    <ActionButtons onDownload={() => {}} onGetStarted={onGetStarted} />
  );
  fireEvent.click(getByText("Get started"));
  expect(onGetStarted).toHaveBeenCalled();
});


test("renders all navigation buttons", () => {
  const { getByText } = render(<NavBar onNavigate={() => {}} />);
  navButtons.forEach((btn) => {
    expect(getByText(btn.label)).toBeInTheDocument();
  });
});

test("calls onNavigate with correct href when a nav button is clicked", () => {
  const onNavigate = jest.fn();
  const { getByText } = render(<NavBar onNavigate={onNavigate} />);
  navButtons.forEach((btn) => {
    fireEvent.click(getByText(btn.label));
    expect(onNavigate).toHaveBeenCalledWith(btn.href);
  });
});


test("renders Buy Now button", () => {
  const { getByText } = render(<WhyChooseUs onBuyNow={() => {}} />);
  expect(getByText("Buy Now")).toBeInTheDocument();
});

test("calls onBuyNow when Buy Now button is clicked", () => {
  const onBuyNow = jest.fn();
  const { getByText } = render(<WhyChooseUs onBuyNow={onBuyNow} />);
  fireEvent.click(getByText("Buy Now"));
  expect(onBuyNow).toHaveBeenCalled();
});



test("renders Explore button", () => {
  const { getByText } = render(<ExploreButton onExplore={() => {}} />);
  expect(getByText("Explore")).toBeInTheDocument();
});

test("calls onExplore when Explore button is clicked", () => {
  const onExplore = jest.fn();
  const { getByText } = render(<ExploreButton onExplore={onExplore} />);
  fireEvent.click(getByText("Explore"));
  expect(onExplore).toHaveBeenCalled();
});



test("renders Download button", () => {
  const { getByText } = render(<DownloadButton onDownload={() => {}} />);
  expect(getByText("Download")).toBeInTheDocument();
});

test("calls onDownload when Download button is clicked", () => {
  const onDownload = jest.fn();
  const { getByText } = render(<DownloadButton onDownload={onDownload} />);
  fireEvent.click(getByText("Download"));
  expect(onDownload).toHaveBeenCalled();
});


test("renders Get Started button", () => {
  const { getByText } = render(<GetStartedButton onGetStarted={() => {}} />);
  expect(getByText("Get Started")).toBeInTheDocument();
});

test("calls onGetStarted when Get Started button is clicked", () => {
  const onGetStarted = jest.fn();
  const { getByText } = render(<GetStartedButton onGetStarted={onGetStarted} />);
  fireEvent.click(getByText("Get Started"));
  expect(onGetStarted).toHaveBeenCalled();
});


test("Download button is disabled when loading", () => {
  const { getByText } = render(<DownloadButton onDownload={() => {}} disabled={true} />);
  expect(getByText("Download")).toBeDisabled();
});
