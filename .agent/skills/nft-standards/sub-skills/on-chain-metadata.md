# On-Chain Metadata

```solidity
contract OnChainNFT is ERC721 {
    struct Traits {
        uint8 background;
        uint8 body;
        uint8 head;
        uint8 rarity;
    }

    mapping(uint256 => Traits) public tokenTraits;

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        Traits memory traits = tokenTraits[tokenId];

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "NFT #', Strings.toString(tokenId), '",',
                        '"description": "On-chain NFT",',
                        '"image": "data:image/svg+xml;base64,', generateSVG(traits), '",',
                        '"attributes": [',
                        '{"trait_type": "Background", "value": "', Strings.toString(traits.background), '"},',
                        '{"trait_type": "Rarity", "value": "', getRarityName(traits.rarity), '"}',
                        ']}'
                    )
                )
            )
        );

        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function generateSVG(Traits memory traits) internal pure returns (string memory) {
        // Generate SVG based on traits
        return "...";
    }
}
```

## Royalties (EIP-2981)

```solidity
import "@openzeppelin/contracts/interfaces/IERC2981.sol";

contract NFTWithRoyalties is ERC721, IERC2981 {
    address public royaltyRecipient;
    uint96 public royaltyFee = 500; // 5%

    constructor() ERC721("Royalty NFT", "RNFT") {
        royaltyRecipient = msg.sender;
    }

    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        external
        view
        override
        returns (address receiver, uint256 royaltyAmount)
    {
        return (royaltyRecipient, (salePrice * royaltyFee) / 10000);
    }

    function setRoyalty(address recipient, uint96 fee) external onlyOwner {
        require(fee <= 1000, "Royalty fee too high"); // Max 10%
        royaltyRecipient = recipient;
        royaltyFee = fee;
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, IERC165)
        returns (bool)
    {
        return interfaceId == type(IERC2981).interfaceId ||
               super.supportsInterface(interfaceId);
    }
}
```

## Soulbound Tokens (Non-Transferable)

```solidity
contract SoulboundToken is ERC721 {
    constructor() ERC721("Soulbound", "SBT") {}

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override {
        require(from == address(0) || to == address(0), "Token is soulbound");
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function mint(address to) external {
        uint256 tokenId = totalSupply() + 1;
        _safeMint(to, tokenId);
    }

    // Burn is allowed (user can destroy their SBT)
    function burn(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "Not token owner");
        _burn(tokenId);
    }
}
```

## Dynamic NFTs

```solidity
contract DynamicNFT is ERC721 {
    struct TokenState {
        uint256 level;
        uint256 experience;
        uint256 lastUpdated;
    }

    mapping(uint256 => TokenState) public tokenStates;

    function gainExperience(uint256 tokenId, uint256 exp) external {
        require(ownerOf(tokenId) == msg.sender, "Not token owner");

        TokenState storage state = tokenStates[tokenId];
        state.experience += exp;

        // Level up logic
        if (state.experience >= state.level * 100) {
            state.level++;
        }

        state.lastUpdated = block.timestamp;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        TokenState memory state = tokenStates[tokenId];

        // Generate metadata based on current state
        return generateMetadata(tokenId, state);
    }

    function generateMetadata(uint256 tokenId, TokenState memory state)
        internal
        pure
        returns (string memory)
    {
        // Dynamic metadata generation
        return "";
    }
}
```

## Gas-Optimized Minting (ERC721A)

```solidity
import "erc721a/contracts/ERC721A.sol";

contract OptimizedNFT is ERC721A {
    uint256 public constant MAX_SUPPLY = 10000;
    uint256 public constant MINT_PRICE = 0.05 ether;

    constructor() ERC721A("Optimized NFT", "ONFT") {}

    function mint(uint256 quantity) external payable {
        require(_totalMinted() + quantity <= MAX_SUPPLY, "Exceeds max supply");
        require(msg.value >= MINT_PRICE * quantity, "Insufficient payment");

        _mint(msg.sender, quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmBaseHash/";
    }
}
```

## Resources

- **references/erc721.md**: ERC-721 specification details
- **references/erc1155.md**: ERC-1155 multi-token standard
- **references/metadata-standards.md**: Metadata best practices
- **references/enumeration.md**: Token enumeration patterns
- **assets/erc721-contract.sol**: Production ERC-721 template
- **assets/erc1155-contract.sol**: Production ERC-1155 template
- **assets/metadata-schema.json**: Standard metadata format
- **assets/metadata-uploader.py**: IPFS upload utility

## Best Practices

1. **Use OpenZeppelin**: Battle-tested implementations
2. **Pin Metadata**: Use IPFS with pinning service
3. **Implement Royalties**: EIP-2981 for marketplace compatibility
4. **Gas Optimization**: Use ERC721A for batch minting
5. **Reveal Mechanism**: Placeholder → reveal pattern
6. **Enumeration**: Support walletOfOwner for marketplaces
7. **Whitelist**: Merkle trees for efficient whitelisting

## Marketplace Integration

- OpenSea: ERC-721/1155, metadata standards
- LooksRare: Royalty enforcement
- Rarible: Protocol fees, lazy minting
- Blur: Gas-optimized trading